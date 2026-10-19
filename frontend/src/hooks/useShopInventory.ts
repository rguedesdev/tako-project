"use client";

import { useCallback, useEffect, useState } from "react";

import { emptyShopInventory, readShopInventory, SHOP_INVENTORY_EVENT, shopStorageKey, type ShopInventory, type ShopItem, type ShopItemType } from "@/lib/otamart";

export function useShopInventory(username: string, legacyUsername?: string) {
  const [inventory, setInventory] = useState<ShopInventory>(emptyShopInventory);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
    setInventory(readShopInventory(username, legacyUsername));
    setReady(true);

    const key = shopStorageKey(username);
    const syncFromStorage = (event: StorageEvent) => {
      if (event.key === key) setInventory(readShopInventory(username, legacyUsername));
    };
    const syncWithinTab = (event: Event) => {
      const updatedKey = (event as CustomEvent<{ key?: string }>).detail?.key;
      if (updatedKey === key) setInventory(readShopInventory(username, legacyUsername));
    };
    window.addEventListener("storage", syncFromStorage);
    window.addEventListener(SHOP_INVENTORY_EVENT, syncWithinTab);
    return () => {
      window.removeEventListener("storage", syncFromStorage);
      window.removeEventListener(SHOP_INVENTORY_EVENT, syncWithinTab);
    };
  }, [username, legacyUsername]);

  useEffect(() => {
    if (!ready) return;
    const key = shopStorageKey(username);
    const serialized = JSON.stringify(inventory);
    if (localStorage.getItem(key) === serialized) return;
    localStorage.setItem(key, serialized);
    window.dispatchEvent(new CustomEvent(SHOP_INVENTORY_EVENT, { detail: { key } }));
  }, [inventory, ready, username]);

  const buyItem = useCallback((item: ShopItem) => {
    if (inventory.ownedItemIds.includes(item.id) || inventory.balance < item.price) return false;
    setInventory((current) => ({
      ...current,
      balance: current.balance - item.price,
      ownedItemIds: [...current.ownedItemIds, item.id],
    }));
    return true;
  }, [inventory]);

  const equipItem = useCallback((itemId: string, type: ShopItemType) => {
    if (!inventory.ownedItemIds.includes(itemId)) return;
    setInventory((current) => ({ ...current, equipped: { ...current.equipped, [type]: itemId } }));
  }, [inventory.ownedItemIds]);

  const unequipType = useCallback((type: ShopItemType) => {
    setInventory((current) => {
      const equipped = { ...current.equipped };
      delete equipped[type];
      return { ...current, equipped };
    });
  }, []);

  return { inventory, ready, buyItem, equipItem, unequipType };
}
