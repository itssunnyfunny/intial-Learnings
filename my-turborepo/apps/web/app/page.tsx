import Image from "next/image";
import { Button } from "@repo/ui/button";
import {Admin}  from "@repo/ui/admin"
import styles from "./page.module.css";

export default function Home() {
  return (
  <>
   <Button appName="web">let me talk </Button>
   <Admin />
   </>
  );
}
