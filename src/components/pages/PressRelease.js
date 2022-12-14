import {
  Box,
  Container,
  Stack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react"
import { useRouter } from "next/router"

import SEO from "@components/SEO"
import SimpleGrid from "@components/SimpleGrid"
import { ChevronDown } from "@components/Icon"
import extractKeyMDXParts from "@utils/extractKeyMDXParts"

const languages = [
  { id: "en", label: "English" },
  { id: "es", label: "Español" },
  { id: "fr", label: "Français" },
  { id: "pt", label: "Portuguese" },
  { id: "ru", label: "русский" },
]

export default function PressReleasePost({ metaData, children, ...restProps }) {
  const router = useRouter()
  const { heading, textBody } = extractKeyMDXParts(children, {
    subHeading: false,
  })

  const currentLanguage = languages.find((s) => s.id === metaData.lang)

  const handleClick = (language) => () => {
    const ext = language.id === "en" ? "" : `-${language.id.toLowerCase()}`
    router.push(`/blog/press-release-climatescope-2021${ext}`)
  }

  return (
    <>
      <SEO {...metaData} />
      <Container as="main">
        <SimpleGrid columns={8} pt={10} pb={40}>
          <Box gridColumn={["1 / -1", null, null, "2 / span 5"]} gridRow="1">
            {heading}
          </Box>

          <Stack
            gridColumn={["1 / -1", null, null, "-3 / -1"]}
            gridRow="2"
            alignItems={["flex-start", null, null, "flex-end"]}
          >
            <Menu>
              <MenuButton
                as={Button}
                colorScheme="gray"
                rightIcon={<ChevronDown />}
              >
                {currentLanguage.label}
              </MenuButton>
              <MenuList borderColor="gray.50" boxShadow="lg">
                {languages
                  .filter((d) => d.id !== metaData.lang)
                  .map((language) => {
                    return (
                      <MenuItem
                        key={language.id}
                        textTransform="capitalize"
                        _hover={{ bg: "gray.50" }}
                        _focus={{ bg: "gray.50" }}
                        onClick={handleClick(language)}
                      >
                        {language.label}
                      </MenuItem>
                    )
                  })}
              </MenuList>
            </Menu>
          </Stack>

          <Box
            gridColumn={["1 / -1", null, null, "2 / span 5"]}
            gridRow={["3", null, null, "2"]}
          >
            <Stack
              spacing={10}
              sx={{
                "p:first-of-type": {
                  color: "gray.500",
                  fontSize: ["lg", null, "xl"],
                },
              }}
              {...restProps}
            >
              {textBody}
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  )
}
