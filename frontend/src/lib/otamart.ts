export type ShopItemType = "font" | "frame";

export type ShopItem = {
  id: string;
  name: string;
  type: ShopItemType;
  typeLabel: string;
  price: number;
  className: string;
  preview: string;
};

export type ShopInventory = {
  balance: number;
  balanceVersion: number;
  ownedItemIds: string[];
  equipped: Partial<Record<ShopItemType, string>>;
};

export const SHOP_INVENTORY_EVENT = "tako:shop-inventory-updated";

export const SHOP_ITEMS: ShopItem[] = [
  { id: "berkshire-swash", name: "Berkshire Swash", type: "font", typeLabel: "Fonte de perfil", price: 800, className: "swash", preview: "Reinaldo" },
  { id: "aurora", name: "Aurora", type: "frame", typeLabel: "Moldura de avatar", price: 1200, className: "aurora", preview: "A" },
  { id: "starlight", name: "Noite estrelada", type: "frame", typeLabel: "Moldura de avatar", price: 1000, className: "starlight", preview: "K" },
  { id: "urban", name: "Cinza urbano", type: "font", typeLabel: "Fonte de perfil", price: 650, className: "urban", preview: "Reinaldo" },
  { id: "sakura", name: "Jardim de sakura", type: "frame", typeLabel: "Moldura de avatar", price: 1400, className: "sakura", preview: "R" },
  { id: "pixel", name: "Pixel", type: "font", typeLabel: "Fonte de perfil", price: 700, className: "pixel", preview: "Reinaldo" },
];

export function emptyShopInventory(): ShopInventory {
  return { balance: 10000, balanceVersion: 1, ownedItemIds: [], equipped: {} };
}

export function shopStorageKey(username: string) {
  return `tako-otamart:${username}`;
}

export function readShopInventory(username: string, legacyUsername?: string): ShopInventory {
  const fallback = emptyShopInventory();
  try {
    let value = localStorage.getItem(shopStorageKey(username));
    if (!value && legacyUsername && legacyUsername !== username) {
      value = localStorage.getItem(shopStorageKey(legacyUsername));
      if (value) localStorage.setItem(shopStorageKey(username), value);
    }
    if (!value) return fallback;
    const parsed = JSON.parse(value) as Partial<ShopInventory>;
    return {
      // The fake shop is in testing mode: grant a 10,000 point wallet once to older local inventories.
      balance: parsed.balanceVersion === 1 && typeof parsed.balance === "number" && parsed.balance >= 0 ? parsed.balance : fallback.balance,
      balanceVersion: 1,
      ownedItemIds: Array.isArray(parsed.ownedItemIds) ? parsed.ownedItemIds.filter((id): id is string => typeof id === "string" && SHOP_ITEMS.some((item) => item.id === id)) : [],
      equipped: parsed.equipped && typeof parsed.equipped === "object" ? parsed.equipped : {},
    };
  } catch {
    return fallback;
  }
}
