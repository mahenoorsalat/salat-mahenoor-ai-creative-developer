import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Row gap="16" wrap horizontal="center" marginBottom="16">
          <SmartLink href="/solutions/upwork">
            <Text variant="label-default-s" onBackground="neutral-weak">Upwork Specialist</Text>
          </SmartLink>
          <SmartLink href="/solutions/reddit">
            <Text variant="label-default-s" onBackground="neutral-weak">Reddit Verified</Text>
          </SmartLink>
          <SmartLink href="/solutions/fiverr">
            <Text variant="label-default-s" onBackground="neutral-weak">Fiverr Pro Alternative</Text>
          </SmartLink>
        </Row>
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>
        <Row gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  aria-label={item.name}
                  size="s"
                  variant="ghost"
                />

              ),
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row >
  );
};
