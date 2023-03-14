import { MantineTheme } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

function showCustomToast(type: "info" | "error" | "loader", title: string, text?: string, autoClose?:number) {
  if (type === "info") {
    showNotification({
      title: title,
      message: text || "",
      sx: { marginTop: "90px" },
      autoClose:autoClose || 7000,
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: theme.colors.green[6],
          borderColor: theme.colors.green[6],
          "&::before": { backgroundColor: theme.white },
        },
        title: { color: theme.white },
        description: { color: theme.white },
        closeButton: {
          color: theme.white,
          "&:hover": { backgroundColor: theme.colors.green[7] },
        },
      }),
    });
  } else if (type === "error") {
    showNotification({
      title: title,
      message: text || "Ha ocurrido un error",
      sx: { marginTop: "90px" },
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: theme.colors.red[6],
          borderColor: theme.colors.red[6],

          "&::before": { backgroundColor: theme.white },
        },
        title: { color: theme.white },
        description: { color: theme.white },
        closeButton: {
          color: theme.white,
          "&:hover": { backgroundColor: theme.colors.red[7] },
        },
      }),
    });
  } else if (type === "loader") {
    showNotification({
      title: title,
      color:"yellow",
      message: text || "Ha ocurrido un error",
      loading: true,
      sx: { marginTop: "90px" },
      styles: (theme: MantineTheme) => ({
        root: {
            backgroundColor: theme.colors.blue[6],
            borderColor: theme.colors.blue[6],
          "&::before": { backgroundColor: theme.white },
        },
        title: { color: theme.white },
        description: { color: theme.white },
        closeButton: {
          color: theme.white,
          "&:hover": { backgroundColor: theme.colors.red[7] },
        },
      }),
    });
  }
}

export default showCustomToast;
