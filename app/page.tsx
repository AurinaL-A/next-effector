"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Typography } from "@mui/material";
import { useUnit } from "effector-react";
import { $counter, incrementConter, nocrementConter, randomcrementConter } from "@/stores/counter";

export default function Home() {
  const count = useUnit($counter)
  return (
    <main className={styles.main}>
        <div className="container">
          <div className="wrapper">
            <Typography>
              Число: {count}
            </Typography>
            <div className="buttons">
            <Button variant="contained" onClick={() => incrementConter()} >
              +
            </Button>
            <Button variant="outlined" color="error" onClick={() => nocrementConter()}>
              -
            </Button>
            <Button variant="contained" color="error" onClick={() => randomcrementConter()}>
              Рандомное число
            </Button>
            </div>

          </div>
        </div>
    </main>
  );
}
