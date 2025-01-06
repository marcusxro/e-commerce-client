import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div>

    <Link href={'/sign-up'}>Sign up</Link>
    
    <Link href={'/dashboard'}>dashboardp</Link>
  </div>
  );
}
