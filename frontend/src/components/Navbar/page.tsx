"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FiLogIn, FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { ImMakeGroup } from "react-icons/im";
import { PiNotePencil } from "react-icons/pi";
import { RiArrowDownSLine, RiGalleryView, RiHome3Line } from "react-icons/ri";

import { useUser } from "@/context/UserContext";
import TakoLogo from "../../../public/tako-logo.png";
import styles from "./navbar.module.css";

function Navbar() {
  const { authenticatedUser, authLoading, logout } = useUser();
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
        <Link href="/" className={styles.logoLink} aria-label="Tako Project — início">
          <Image className={styles.logo} src={TakoLogo} alt="Tako Project" priority />
        </Link>

        <div className={styles.primaryLinks}>
          <Link href="/"><RiHome3Line /><span>Home</span></Link>
          <Link href="/releases"><RiGalleryView /><span>Lançamentos</span></Link>
          <Link href="/mangas"><HiOutlineBookOpen /><span>Mangas</span></Link>
          <Link href="/scans"><ImMakeGroup /><span>Scans</span></Link>
        </div>

        <div className={styles.accountArea}>
          {authLoading ? (
            <span className={styles.accountSkeleton} aria-label="Verificando sessão" />
          ) : authenticatedUser ? (
            <>
              <button className={styles.notificationButton} aria-label="Notificações" disabled>
                <FaRegBell />
              </button>
              <div className={styles.userMenu} ref={menuRef}>
                <button className={styles.userTrigger} onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-haspopup="menu">
                  {authenticatedUser.profilePicture ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={authenticatedUser.profilePicture} alt="" />
                  ) : (
                    <span className={styles.avatarFallback}>{authenticatedUser.name.slice(0, 1).toUpperCase()}</span>
                  )}
                  <span className={styles.userIdentity}><strong>{authenticatedUser.name}</strong><small>@{authenticatedUser.username}</small></span>
                  <RiArrowDownSLine />
                </button>
                {menuOpen && (
                  <div className={styles.dropdown} role="menu">
                    <div className={styles.planBadge}>{authenticatedUser.subscription.plan}</div>
                    <Link role="menuitem" href={`/profile/${authenticatedUser.username}`} onClick={() => setMenuOpen(false)}><FiUser /> Meu perfil</Link>
                    <Link role="menuitem" href="/manage" onClick={() => setMenuOpen(false)}><FiSettings /> Área de gestão</Link>
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
