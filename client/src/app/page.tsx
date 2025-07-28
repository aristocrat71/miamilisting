import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Banner";
import MainSections from "./components/MainSections";

export default function Home() {
  return (
    <div style={{ marginTop: 24 }}>
      <MainSections />
    </div>
  );
}
