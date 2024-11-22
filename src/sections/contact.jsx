import copy from "../assets/copy.svg";
import Link from "../components/link";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center gap-16">
      <h2>Get in Touch</h2>
      <div className="flex flex-col gap-4 items-center md:flex-row md:gap-16">
        <div className="flex gap-4 items-center">
          <h2 className="text-2xl font-normal">omarisadev@gmail.com</h2>
          <img className="h-6 w-6 cursor-pointer" src={copy} alt=""  onClick={() => navigator.clipboard.writeText("omarisadev@gmail.com")} />
        </div>
        <div className="flex gap-4">
            <Link href="mailto:omarisadev@gmail.com" className="w-fit h-fit py-2 px-3 hover:bg-transparent transition">Send Email</Link>
            <Link href="https://buymeacoffee.com/omar.saad" className="w-fit h-fit py-2 px-3 bg-transparent">Buy me a coffee</Link>
        </div>
      </div>
    </div>
  );
}
