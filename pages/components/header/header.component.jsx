import Link from "next/link";

export default () => (
    <div>
        <Link href="/">
            <button>Home</button>
        </Link>
        <Link href="/about">
            <button>About</button>
        </Link>
        <Link href="/contact">
            <button>Contact</button>
        </Link>
        <Link href="/projects">
            <button>Projects</button>
        </Link>
    </div>
);