import { useGetLocale, useSetLocale } from "@refinedev/core";
import { DownOutlined } from "@ant-design/icons";
import {
  Layout as AntdLayout,
  Space,
  Button,
  Dropdown,
  Avatar,
  MenuProps,
} from "antd";
import { useTranslation } from "react-i18next";

const simpleLangToCountryMap: Record<string, string> = {
  ja: "jp",
  en: "us",
  fr: "fr",
  de: "de",
  it: "it",
  es: "es",
  ru: "ru",
  zh: "cn",
  ar: "sa",
  pt: "br",
  hi: "in",
};

export const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const locale = useGetLocale();
  const changeLanguage = useSetLocale();

  const currentLocale = locale();

  const menuItems: MenuProps["items"] = [...(i18n.languages || [])]
    .sort()
    .map((lang: string) => ({
      key: lang,
      onClick: () => changeLanguage(lang),
      icon: (
        <span style={{ marginRight: 8 }}>
          <Avatar
            size={16}
            // src={`/images/flags/${simpleLangToCountryMap[
            //   lang
            // ].toUpperCase()}.png`}
          />
        </span>
      ),
      label: lang,
    }));

  return (
    <AntdLayout.Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "48px",
        backgroundColor: "#FFF",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <Dropdown
        menu={{
          items: menuItems,
          selectedKeys: currentLocale ? [currentLocale] : [],
        }}
      >
        <Button type="text">
          <Space>
            <Avatar
              size={16}
              // src={`/images/flags/${simpleLangToCountryMap[
              //   currentLocale as string
              // ].toUpperCase()}.png`}
            />
            {currentLocale}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </AntdLayout.Header>
  );
};
