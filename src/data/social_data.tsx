import { DevtoIcon } from "@/components/icons/devto";
import { DiscordIcon } from "@/components/icons/discord";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { MailIcon } from "@/components/icons/mail";
import { NextJSArgIcon } from "@/components/icons/nextjsargentina";
import { ResumeIcon } from "@/components/icons/resume";
import { TelegramIcon } from "@/components/icons/telegram";
import { WebIcon } from "@/components/icons/web";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { XIcon } from "@/components/icons/x";

export const SOCIAL_DATA = {
  name: "Danyal Moazzam",
  initials: "DM",
  avatar: "/assets/avatar.jpg",
  about: `🖥️ Frontend Engineer, 👨‍💻 Jr. Full Stack Developer and
  Influenced by 🎴Designs.📍Based in Lahore, Pakistan 🇵🇰`,
  contacts: [
    {
      title: "Portfolio",
      url: "https://danyalport.vercel.app",
      icon: WebIcon,
    },
    {
      title: "Resume",
      url: "https://danyalcv.vercel.app/",
      icon: ResumeIcon,
    },
    {
      title: "Email",
      url: "mailto:me@danyalmoazzamjan@gmail.com",
      icon: MailIcon,
    },
    {
      title: "Phone",
      url: "tel:+92321951171",
      icon: WhatsappIcon,
    },
  ],
  socials: [
    {
      title: "GitHub",
      url: "https://github.com/danyalmoazzam",
      icon: GithubIcon,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/danyalmoazzamjan",
      icon: LinkedinIcon,
    },
    {
      title: "Twitter",
      url: "https://x.com/danyalmoazzamm",
      icon: XIcon,
    },
    {
      title: "Telegram",
      url: "https://t.me/danyalmoazzam",
      icon: TelegramIcon,
    },
    {
      title: "Dev Community",
      url: "https://dev.to/danyalmoazzam",
      icon: DevtoIcon,
    },
  ],
  communities: [
    {
      title: "Next.js",
      url: "https://dub.sh/nextjs",
      icon: NextJSArgIcon,
    },
    {
      title: "Discord Community",
      url: "https://dub.sh/dsnextjs",
      icon: DiscordIcon,
    },
  ],
};
