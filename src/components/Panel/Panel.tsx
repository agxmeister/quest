"use client"

import styles from './Panel.module.css';
import {useState} from "react";
import {Coordinates} from "@/components/Panel/types";

export const Panel = () => {
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
    return (
        <div
            className={styles.panel}
            onClick={(e) => setCoordinates({
                x: e.clientX,
                y: e.clientY,
            })}
        >
            {coordinates
                ? `x: ${coordinates.x}, y: ${coordinates.y}`
                : "Click to get the coordinates."
            }
        </div>
    );
}
