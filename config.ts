import { Config } from './src/lib/config.types';

export const config: Config = {
  themeColor: "#5789f6",
  logoURL: "/images/logos/dayz.png",
  site: {
    url: "https://dayzstandalone.cz/",
    title: "Dva Světy",
    twitter: {
      site: "@site",
      creator: "@creator",
      card: "summary_large_image",
      images: [
        {
          url: "/images/marketing/banner.png",
          alt: "Banner",
        },
      ],
    },
  },
  pages: {
    home: {
      title: "DayZ | Dva Světy",
      description: "Vítejte v komunitě Dva Světy! Jsme komunita DayZ, která se věnuje poskytování nejlepších zkušeností našim hráčům. Přidejte se k nám ještě dnes!",
      sections: {
        network: {
          title: "Servery",
          description: "Naše servery DayZ jsou hostovány v Evropě a jsou spravovány naším specializovaným týmem vývojářů a systémových administrátorů.",
        },
        about: {
          title: "O Nás",
          description: "Jsme komunita hráčů DayZ, kteří jsou nadšení pro hru a zážitky, které poskytuje. Snažíme se poskytnout bezpečné a příjemné prostředí pro všechny hráče.",
          rows: {
            1: {
              title: "Eventy",
              description: "Pořádáme pravidelné akce a soutěže, kterých se mohou naši hráči zúčastnit. Tyto akce jsou skvělým způsobem, jak poznat nové lidi a pobavit se ve hře.",
              image: {
                url: "/images/about/events.jpg",
                alt: "Events Image",
              },
            },
            2: {
              title: "Komunita",
              description: "Věříme, že silná komunita je klíčem k úspěšnému serveru. Usilovně pracujeme na podpoře pozitivní a inkluzivní komunity pro všechny hráče.",
              image: {
                url: "/images/about/community.jpg",
                alt: "Community Image",
              },
            },
            3: {
              title: "Development",
              description: "Náš tým vývojářů neustále pracuje na vylepšení serveru a přidávání nových funkcí. Uvítáme zpětnou vazbu a návrhy od našich hráčů.",
              image: {
                url: "/images/about/development.png",
                alt: "Development Image",
              },
            },
          },
        },
        leaderboard: {
          title: "Žebříček",
          description: "Podívejte se na nejlepší hráče na našich serverech a uvidíte, jak si stojíte. Dokážete se dostat na vrchol žebříčku?",
        },
        contact: {
          title: "Kontaktujte nás",
          description: "Máte-li jakékoli dotazy nebo obavy, neváhejte nás kontaktovat prostřednictvím následujících kanálů.",
          links: {
            'Discord': "https://discord.gg/dvasvety",
            'Facebook': "https://www.facebook.com/groups/1123159632423918",
            'Youtube': "https://www.youtube.com/@DayZ-2svety/videos",
          },
        },
      },
    },
  },
  hero: {
    title: "Nasloucháme, učíme se, dodáváme.",
    description: "Naše komunita DayZ je postavena na principech transparentnosti, integrity a důvěry. Zavázali jsme se poskytovat našim hráčům ten nejlepší zážitek. Ať už jste ostřílený veterán nebo nový hráč, máme pro vás místo.",
    background: {
      color: 'rgb(51 65 85)',
      image: {
        url: "/images/marketing/DvaSvetyLoading5.png",
        alt: "Hero Image",
      },
    },
    cta: {
      label: "Připoj se k nám!",
      href: "https://discord.gg/dvasvety",
    },
  },
  servers: [
    {
      name: 'Dva Světy',
      ipv4: '93.99.7.63',
      gamePort: 2922,
      steamQueryPort: 2923,
      cftoolsApiId: '535e10c0-c6f2-4936-a196-c5228a863f10',
    },
  ],
  cftools: {
    leaderboard: {
      enabled: true,
      defaultSortValue: 'kills',
      allowedSortValues: ['kills', 'deaths', 'kdratio', 'longest_kill', 'longest_shot', 'playtime', 'suicides'],
      blacklistedCFToolsIds: [],
      showAmount: 30,
    },
  },
  footer: {
    trademarkNotice: "",
    brandingName: "Dva Světy komunita",
    brandingURL: '/',
    initialCopyrightYear: 2023,
    copyrightBrandName: "Dva Svety",
    copyrightBrandUrl: '/',
    links: [
      {
        url: '#',
        label: 'O Nás',
      },
    ],
  },
};
