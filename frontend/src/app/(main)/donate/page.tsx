"use client";

import { useState } from "react";
import { FaBitcoin, FaQrcode } from "react-icons/fa6";
import { FiCheck, FiCopy, FiHash, FiKey } from "react-icons/fi";
import { MdPix } from "react-icons/md";
import { PiHeartFill } from "react-icons/pi";
import { BiDonateHeart } from "react-icons/bi";
import { RiAdvertisementLine, RiServerLine } from "react-icons/ri";
import styles from "./donate.module.css";

function DonatePage() {
  const [copied, setCopied] = useState(false);
  const [bitcoinCopied, setBitcoinCopied] = useState(false);
  const [pixMethod, setPixMethod] = useState<"qr" | "key">("qr");
  const [bitcoinMethod, setBitcoinMethod] = useState<"qr" | "address">("qr");
  const pixKey = "das5dsd5as67d5-adashdasghdas-dasdasd6as678d6";
  const bitcoinAddress = "BTC-DEMO-ADDRESS-DO-NOT-SEND";

  async function copyPixKey() {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  async function copyBitcoinAddress() {
    try {
      await navigator.clipboard.writeText(bitcoinAddress);
      setBitcoinCopied(true);
      window.setTimeout(() => setBitcoinCopied(false), 2000);
    } catch {
      setBitcoinCopied(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.donateContainer} aria-labelledby="donate-title">
        <div className={styles.hero}>
          <span className={styles.eyebrow}><BiDonateHeart aria-hidden="true" /> APOIE O TAKO</span>
          <h1 id="donate-title">A comunidade pode ajudar o Tako a continuar no ar</h1>
          <p className={styles.intro}>
            O Tako é mantido com recursos próprios e com a receita dos anúncios exibidos na plataforma. Mesmo assim, essa receita ainda não é suficiente para cobrir todos os custos e manter o projeto crescendo. Você pode apoiar com qualquer valor; toda contribuição ajuda.
          </p>
        </div>

        <div className={styles.supportCards}>
          <article className={styles.supportCard}>
            <span className={styles.cardIcon}><RiServerLine aria-hidden="true" /></span>
            <div>
              <h2>Um projeto independente</h2>
              <p>Infraestrutura, armazenamento e desenvolvimento são sustentados com recursos próprios e com a publicidade do site.</p>
            </div>
          </article>
          <article className={styles.supportCard}>
            <span className={styles.cardIcon}><RiAdvertisementLine aria-hidden="true" /></span>
            <div>
              <h2>O apoio da comunidade importa</h2>
              <p>Os anúncios ajudam, mas ainda não cobrem tudo. A participação da comunidade pode ajudar a manter a plataforma ativa e melhorar o Tako para quem lê.</p>
            </div>
          </article>
        </div>

        <section className={styles.pixSection} aria-labelledby="pix-title">
          <div className={styles.pixHeading}>
            <h2 className={styles.sectionTitle} id="pix-title"><MdPix className={styles.sectionTitleIcon} aria-hidden="true" /> Apoie via Pix</h2>
            <p>Escolha uma das opções abaixo para apoiar o Tako via Pix.</p>
          </div>
          <div className={`${styles.cryptoMethods} ${pixMethod === "key" ? styles.cryptoMethodsSecond : ""}`} role="group" aria-label="Forma de exibição do Pix">
            <button className={pixMethod === "qr" ? styles.cryptoMethodActive : styles.cryptoMethod} type="button" aria-pressed={pixMethod === "qr"} onClick={() => setPixMethod("qr")}><FaQrcode aria-hidden="true" /> QR Code</button>
            <button className={pixMethod === "key" ? styles.cryptoMethodActive : styles.cryptoMethod} type="button" aria-pressed={pixMethod === "key"} onClick={() => setPixMethod("key")}><FiKey aria-hidden="true" /> Chave Pix</button>
          </div>
          <div className={styles.cryptoCard}>
            {pixMethod === "qr" ? (
              <div className={styles.cryptoQrPanel}>
                <div className={styles.qrPlaceholder} aria-label="Espaço reservado para o QR Code Pix">
                  QR Code
                </div>
                <p className={styles.qrInstruction}>Leia o QR Code com o app do seu banco e prossiga com o pagamento.</p>
              </div>
            ) : (
              <div className={styles.cryptoDetails}>
                <h3>Chave Pix aleatória</h3>
                <div className={styles.addressInputRow}>
                  <input className={styles.addressInput} type="text" value={pixKey} readOnly tabIndex={-1} aria-label="Chave Pix aleatória" onMouseDown={(event) => event.preventDefault()} />
                  <button className={styles.copyButton} type="button" onClick={copyPixKey}>
                    {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                    {copied ? "Chave copiada" : "Copiar chave Pix"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className={`${styles.pixSection} ${styles.cryptoSection}`} aria-labelledby="crypto-title">
          <div className={styles.pixHeading}>
            <h2 className={styles.sectionTitle} id="crypto-title"><FaBitcoin className={styles.sectionTitleIcon} aria-hidden="true" /> Apoie com Bitcoin</h2>
            <p>Escolha entre visualizar o QR Code ou o endereço. Esta demonstração usa dados fictícios e não aceita pagamentos.</p>
          </div>
          <div className={`${styles.cryptoMethods} ${bitcoinMethod === "address" ? styles.cryptoMethodsSecond : ""}`} role="group" aria-label="Forma de exibição do Bitcoin">
            <button className={bitcoinMethod === "qr" ? styles.cryptoMethodActive : styles.cryptoMethod} type="button" aria-pressed={bitcoinMethod === "qr"} onClick={() => setBitcoinMethod("qr")}><FaQrcode aria-hidden="true" /> QR Code</button>
            <button className={bitcoinMethod === "address" ? styles.cryptoMethodActive : styles.cryptoMethod} type="button" aria-pressed={bitcoinMethod === "address"} onClick={() => setBitcoinMethod("address")}><FiHash aria-hidden="true" /> Endereço</button>
          </div>
          <div className={styles.cryptoCard}>
            {bitcoinMethod === "qr" ? (
              <div className={styles.cryptoQrPanel}>
                <div className={styles.qrPlaceholder} aria-label="Espaço reservado para o QR Code Bitcoin">
                  QR Code
                </div>
                <p className={styles.qrInstruction}>Leia o QR Code com sua carteira Bitcoin e prossiga com o pagamento.</p>
              </div>
            ) : (
              <div className={styles.cryptoDetails}>
                <h3>Endereço Bitcoin</h3>
                <div className={styles.addressInputRow}>
                  <input className={styles.addressInput} type="text" value={bitcoinAddress} readOnly tabIndex={-1} aria-label="Endereço Bitcoin fictício" onMouseDown={(event) => event.preventDefault()} />
                  <button className={styles.copyButton} type="button" onClick={copyBitcoinAddress}>
                    {bitcoinCopied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                    {bitcoinCopied ? "Endereço copiado" : "Copiar endereço"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <p className={styles.closing}>Obrigado por fazer parte da comunidade Tako. <PiHeartFill aria-hidden="true" /></p>
      </section>
    </main>
  );
}

export default DonatePage;
