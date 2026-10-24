"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FiLogIn, FiLogOut, FiSettings, FiShield } from "react-icons/fi";
import { BsBackpack2 } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { LuSquareLibrary } from "react-icons/lu";
import { ImMakeGroup } from "react-icons/im";
import { PiNotePencil, PiRanking } from "react-icons/pi";
import { BiDonateHeart } from "react-icons/bi";
import { RiArrowDownSLine, RiGalleryView, RiStore3Line } from "react-icons/ri";

import { useShopInventory } from "@/hooks/useShopInventory";
import { SHOP_ITEMS } from "@/lib/otamart";
import { useUser } from "@/context/UserContext";
import TakoLogo from "../../../public/tako-logo.png";
import styles from "./navbar.module.css";

function Navbar() {
  const { authenticatedUser, authLoading, logout } = useUser();
  const { inventory } = useShopInventory(authenticatedUser?.id ?? "demo", authenticatedUser?.username);
  const equippedFrame = SHOP_ITEMS.find((item) => item.id === inventory.equipped.frame);
  const equippedFont = SHOP_ITEMS.find((item) => item.id === inventory.equipped.font);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Navegação principal">
        <div className={styles.logoGroup}>
          <Link href="/" className={styles.logoLink} aria-label="Tako Project — início">
            <Image className={styles.logo} src={TakoLogo} alt="Tako Project" priority />
          </Link>
          <span className={styles.alphaBadge}>Alpha</span>
        </div>

        <div className={styles.primaryLinks}>
          <Link href="/releases"><RiGalleryView /><span>Lançamentos</span></Link>
          <Link href="/mangas"><HiOutlineBookOpen /><span>Mangas</span></Link>
          <Link href="/scans"><ImMakeGroup className={styles.scanIcon} /><span>Scans</span></Link>
          <Link href="/rankings"><PiRanking /><span>Ranking</span></Link>
          <Link href="/otamart" aria-label="OtaMart"><RiStore3Line /><span>OtaMart</span></Link>
          <Link href="/donate"><BiDonateHeart /><span>Apoie</span></Link>
        </div>

        <div className={styles.accountArea}>
          {authLoading ? (
            <span className={styles.accountSkeleton} aria-label="Verificando sessão" />
          ) : authenticatedUser ? (
            <>
              <div className={styles.userMenu} ref={menuRef}>
                <button className={styles.userTrigger} onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-haspopup="menu">
                  {authenticatedUser.profilePicture ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img data-frame={equippedFrame?.className} src={authenticatedUser.profilePicture} alt="" />
                  ) : (
                    <svg className={styles.avatarFallback} data-frame={equippedFrame?.className} viewBox="0 0 36 36" aria-hidden="true">
                      <circle cx="18" cy="18" r="18" fill="url(#navbar-avatar-gradient)" />
                      <defs>
                        <linearGradient id="navbar-avatar-gradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#60a5fa" />
                          <stop offset="100%" stopColor="#1d4ed8" />
                        </linearGradient>
                      </defs>
                      <text x="18" y="18" textAnchor="middle" dominantBaseline="central" fill="white" fontSize="16" fontWeight="700">{authenticatedUser.name.slice(0, 1).toUpperCase()}</text>
                    </svg>
                  )}
                  <span className={styles.userIdentity}><strong data-font={equippedFont?.className}>{authenticatedUser.name}</strong><small>@{authenticatedUser.username}</small></span>
                  <RiArrowDownSLine />
                </button>
                {menuOpen && (
                  <div className={styles.dropdown} role="menu">
                    <div className={styles.planBadge}>{authenticatedUser.subscription.plan}</div>
                    <button role="menuitem" disabled><FaRegBell /> Notificações <small>Em breve</small></button>
                    <Link role="menuitem" href={`/profile/${authenticatedUser.username}`} onClick={() => setMenuOpen(false)}><MdOutlinePersonOutline className={styles.profileMenuIcon} /> Meu perfil</Link>
                    <Link role="menuitem" href="/library" onClick={() => setMenuOpen(false)}><LuSquareLibrary className={styles.libraryMenuIcon} /> Minha biblioteca</Link>
                    <Link role="menuitem" href="/inventory" onClick={() => setMenuOpen(false)}><BsBackpack2 /> Meu inventário</Link>
                    <button role="menuitem" type="button" disabled><FiSettings /> Configurações <small>Em breve</small></button>
                    {authenticatedUser.accountType === "HADES" && <Link role="menuitem" href="/admin/claims" onClick={() => setMenuOpen(false)}><FiShield /> Reivindicações</Link>}
                    <button role="menuitem" onClick={() => { setMenuOpen(false); logout(); }}><FiLogOut /> Sair</button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className={styles.authLinks}>
              <Link href="/signin"><FiLogIn /><span>Entrar</span></Link>
              <Link href="/signup" className={styles.signUpLink}><PiNotePencil /><span>Cadastre-se</span></Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export { Navbar };
