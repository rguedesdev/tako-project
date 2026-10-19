"use client";

import Link from "next/link";

import { useUser } from "@/context/UserContext";
import { useShopInventory } from "@/hooks/useShopInventory";
import { SHOP_ITEMS, type ShopItemType } from "@/lib/otamart";
import styles from "./inventory.module.css";

export default function InventoryPage() {
  const { authenticatedUser } = useUser();
  const accountKey = authenticatedUser?.id ?? authenticatedUser?.username ?? "demo";
  const { inventory, ready, equipItem, unequipType } = useShopInventory(accountKey, authenticatedUser?.username);

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div>
          <span className={styles.eyebrow}>PERSONALIZAÇÃO</span>
          <h1>Meu inventário</h1>
          <p>Gerencie as fontes e molduras que você adquiriu no OtaMart.</p>
        </div>
        <Link className={styles.shopLink} href="/otamart">Explorar OtaMart</Link>
      </header>

      {!ready ? <p className={styles.empty}>Carregando inventário…</p> : inventory.ownedItemIds.length ? (
        <div className={styles.inventory}>
          {(["font", "frame"] as ShopItemType[]).map((type) => {
            const items = SHOP_ITEMS.filter((item) => item.type === type && inventory.ownedItemIds.includes(item.id));
            if (!items.length) return null;
            const equippedId = inventory.equipped[type];
            return (
              <section className={styles.category} key={type} aria-labelledby={`inventory-${type}`}>
                <div className={styles.categoryHeading}>
                  <div><h2 id={`inventory-${type}`}>{type === "font" ? "Fontes" : "Molduras"}</h2><p>{items.length} {items.length === 1 ? "item" : "itens"}</p></div>
                  {equippedId && <button className={styles.removeStyle} type="button" onClick={() => unequipType(type)}>Remover {type === "font" ? "fonte" : "moldura"} aplicada</button>}
                </div>
                <div className={styles.items}>
                  {items.map((item) => {
                    const applied = equippedId === item.id;
                    return (
                      <article className={styles.item} key={item.id}>
                        <div className={styles.preview}>
                          {item.type === "font" ? <span data-font={item.className}>{item.preview}</span> : <span className={styles.previewAvatar} data-frame={item.className}>{item.preview}</span>}
                        </div>
                        <div className={styles.itemInfo}>
                          <div><h3>{item.name}</h3><p>{item.typeLabel}</p></div>
                          <button type="button" className={applied ? styles.applied : ""} disabled={applied} onClick={() => equipItem(item.id, type)}>{applied ? "Aplicado" : "Aplicar"}</button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <section className={styles.empty}>
          <div className={styles.emptyIcon} aria-hidden="true">✦</div>
          <h2>Seu inventário está vazio</h2>
          <p>Quando você comprar fontes ou molduras no OtaMart, elas aparecerão aqui para aplicar no seu perfil.</p>
          <Link href="/otamart">Ver itens da loja</Link>
        </section>
      )}
    </main>
  );
}
