import AccordionRes from "../../components/testing/AccordionRes";

export default function ResourcesLink() {
    const resourceLinks = {
        academicCalendar: {
            title: "Academic Calendar 25/26",
            href: "https://dgaa.site.nthu.edu.tw/var/file/209/1209/img/275/2025-2026calendar_20250319.pdf",
        },
        workClassStatus: {
            title: "Work and Class Status",
            href: "https://www.dgpa.gov.tw/typh/daily/ndse.html",
        },
        ARC: {
            title: "ARC Information",
            href: "https://coa.immigration.gov.tw/coa-frontend/",
        },
        workPermit: {
            title: "Work Permit",
            href: "https://ezwp.wda.gov.tw/wcfonline/wSite/Control?function=IndexPage",
        },
    };

    const infoCards = {
        essentials: {
            title: "EECS-GS",
            href: "",
            items: [
                "Office Location: ...",
                "Office Hours: ...",
                "Email: ...",
                "Telephone: ...",
            ],
        },
        contacts: {
            title: "IBP",
            href: "",
            items: [
                "Office Location: ...",
                "Office Hours: ...",
                "Email: ...",
                "Telephone: ...",
            ],
        },
    };

    return (
        <AccordionRes>
            <AccordionRes.Item
                title="STUDENT ESSENS."
                bgColor="rgba(90, 73, 143, 1)"
            >
                <LinkButtonList links={resourceLinks} />
            </AccordionRes.Item>

            <AccordionRes.Item title="OFFICE" bgColor="rgba(90, 73, 143, 0.8)">
                <InfoCardList cards={infoCards} />
            </AccordionRes.Item>

            <AccordionRes.Item
                title="MERCHANDISE"
                bgColor="rgba(90, 73, 143, 0.6)"
            ></AccordionRes.Item>
        </AccordionRes>
    );
}

import { ExternalLink } from "lucide-react"; // uses lucide-react icon set

function LinkButton({ title = "Open Link", href = "#", newTab = true }) {
    return (
        <a
            href={href}
            target={newTab ? "_blank" : "_self"}
            rel={newTab ? "noopener noreferrer" : undefined}
            className="
        inline-flex items-center justify-between 
        w-full
        px-5 py-3 
        bg-white text-black font-semibold 
        rounded-md 
        hover:bg-gray-100 
        transition-all duration-200 
        border-2 border-transparent hover:border-black
        shadow-sm
      "
        >
            <span className="text-2xl font-bold text-black">{title}</span>
            <ExternalLink className="ml-2 w-10 h-10" />
        </a>
    );
}

function LinkButtonList({ links = {}, className = "" }) {
    return (
        <div className={`space-y-4 ${className}`}>
            {Object.entries(links).map(([key, { title, href }]) => (
                <LinkButton key={key} title={title} href={href} />
            ))}
        </div>
    );
}

function InfoCard({
    title = "Card Title",
    items = [],
    href = null,
    className = "",
}) {
    const Wrapper = href ? "a" : "div";
    return (
        <Wrapper
            href={href || undefined}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            className={`
            bg-white
            backdrop-blur-sm 
            rounded-2xl 
            p-6 
            text-black
            shadow-md 
            transition-transform 
            hover:scale-[1.02] 
            ${className}
        `}
        >
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
                {title}
            </h2>
            <ul className="space-y-2 text-black">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-start text-xl md:text-3xl"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}

function InfoCardList({ cards = {}, className = "" }) {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto ${className}`}
        >
            {Object.entries(cards).map(([key, { title, items, href }]) => (
                <InfoCard key={key} title={title} items={items} href={href} />
            ))}
        </div>
    );
}
