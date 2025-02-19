import styles from "./page.module.css";
import {Panel} from "@/components/Panel/Panel";

export default function Home() {
    return (
        <div className={styles.page}>
            <Panel/>
        </div>
    );
}
