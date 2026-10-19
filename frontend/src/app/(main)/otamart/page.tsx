"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiShoppingBag, FiStar } from "react-icons/fi";
import { PiDiamondsFourBold } from "react-icons/pi";
import { RiCopperCoinLine } from "react-icons/ri";

import { useUser } from "@/context/UserContext";
import { useShopInventory } from "@/hooks/useShopInventory";
import { SHOP_ITEMS } from "@/lib/otamart";
import styles from "./otamart.module.css";

function OtaMartPage() {
  const { authenticatedUser } = useUser();
  const accountKey = authenticatedUser?.id ?? authenticatedUser?.username ?? "demo";
  const { inventory, ready, buyItem, equipItem } = useShopInventory(accountKey, authenticatedUser?.username);
  const [purchaseMessage, setPurchaseMessage] = useState("");
  const [purchaseError, setPurchaseError] = useState(false);

  function handleItem(item: (typeof SHOP_ITEMS)[number]) {
    const owned = inventory.ownedItemIds.includes(item.id);
    const equipped = inventory.equipped[item.type] === item.id;
    if (owned) {
      if (equipped) return;
      equipItem(item.id, item.type);
      setPurchaseError(false);
      setPurchaseMessage(`${item.name} aplicado ao seu perfil.`);
      return;
    }

    if (!buyItem(item)) {
      setPurchaseError(true);
      setPurchaseMessage(`Saldo insuficiente para comprar ${item.name}.`);
      return;
    }

    setPurchaseError(false);
    setPurchaseMessage(`${item.name} comprado. Você já pode aplicar quando quiser.`);
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}><FiShoppingBag /> LOJA DA COMUNIDADE</span>
          <h1>Ota<span>Mart</span></h1>
          <p>Personalize seu perfil com itens que você conquista lendo.</p>
          <div className={styles.heroActions}>
            <a className={styles.exploreLink} href="#vitrine">Explorar itens <FiArrowUpRight /></a>
            <Link className={styles.inventoryLink} href="/inventory">Meu inventário</Link>
          </div>
        </div>
        <div className={styles.wallet}>
          <span className={styles.walletLabel}>Saldo de demonstração</span>
          <strong><RiCopperCoinLine /> {ready ? inventory.balance.toLocaleString("pt-BR") : "…"} <small>Otaku pts</small></strong>
          <span className={styles.walletNote}>Pontos ganhos com suas leituras</span>
        </div>
        <div className={styles.heroOrnament} aria-hidden="true"><PiDiamondsFourBold /></div>
      </section>

      <section className={styles.shelf} id="vitrine" aria-labelledby="shelf-title">
        <div className={styles.sectionHeading}>
          <div><span className={styles.eyebrow}>ESCOLHA SEU ESTILO</span><h2 id="shelf-title">Vitrine</h2></div>
          <span className={styles.previewTag}><FiStar /> Prévia da loja</span>
        </div>
        <div className={styles.filters} aria-label="Categorias">
          <span className={styles.filterActive}>Todos os itens</span>
          <span>Fontes</span>
          <span>Molduras</span>
        </div>
        <div className={styles.products}>
          {SHOP_ITEMS.map((product) => {
            const owned = inventory.ownedItemIds.includes(product.id);
            const equipped = inventory.equipped[product.type] === product.id;
            return <article className={styles.product} key={product.id}>
              <div className={`${styles.productArt} ${styles[product.className]}`}>
                {product.type === "font" ? (
                  <span className={styles.namePreview}>{product.preview}</span>
                ) : (
                  <span className={styles.avatarPreview}>{product.preview}</span>
                )}
                <span className={styles.artCaption}>{product.typeLabel}</span>
              </div>
              <div className={styles.productInfo}>
                <div><h3>{product.name}</h3><p>{product.typeLabel}</p></div>
                <div className={styles.productBottom}>
                  <strong><RiCopperCoinLine /> {product.price.toLocaleString("pt-BR")} <small>Otaku pts</small></strong>
                  <button type="button" disabled={!ready || equipped} onClick={() => handleItem(product)}>
                    {equipped ? "Aplicado" : owned ? "Aplicar agora" : "Comprar"}
                  </button>
                </div>
              </div>
            </article>
          })}
        </div>
      </section>
      <p className={`${styles.purchaseMessage} ${purchaseError ? styles.purchaseMessageError : ""}`} role="status" aria-live="polite">{purchaseMessage}</p>
      <p className={styles.disclaimer}>Esta é uma prévia visual. Saldo, itens e preços são demonstrativos.</p>
    </main>
  );
}

export default OtaMartPage;
