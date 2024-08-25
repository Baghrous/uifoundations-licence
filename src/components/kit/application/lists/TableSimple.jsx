import * as React from "react"
import { Box, Button, IconButton, Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { TbPencil, TbPlus } from "react-icons/tb"
// simple table
export default function TableSimple({ columns = COLUMNS, rows = ROWS }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: 400,
        flex: 1,
        gap: 2,
        width: "100%",
        mt: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
          rowGap: 1,
          columnGap: 2,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: "xl",
              mb: 0.5,
            }}
          >
            Team
          </Typography>
          <Typography
            sx={{
              fontSize: "sm",
              color: "gray.600",
            }}
          >
            A list of all users with built-in sorting, filtering, and
            pagination.
          </Typography>
        </Box>
        <Box>
          <Button variant="outlined" color="secondary" startIcon={<TbPlus />}>
            Invite User
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flex: 1,
        }}
      >
        <DataGrid columns={columns} rows={rows} />
      </Box>
    </Box>
  )
}
const COLUMNS = [
  {
    field: "id",
    hide: true,
    filterable: false,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 2,
    minWidth: 120,
    renderCell: params => (
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "sm",
          color: "gray.700",
        }}
      >
        {params.value}
      </Typography>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    flex: 2,
    minWidth: 120,
    renderCell: params => (
      <Typography
        sx={{
          fontSize: "sm",
          color: "gray.600",
        }}
      >
        {params.value}
      </Typography>
    ),
  },
  {
    field: "title",
    headerName: "Title",
    flex: 2,
    minWidth: 120,
    renderCell: params => (
      <Typography
        sx={{
          fontSize: "sm",
          color: "gray.600",
        }}
      >
        {params.value}
      </Typography>
    ),
  },
  {
    field: "type",
    headerName: "Type",
    flex: 1,
    minWidth: 80,
    renderCell: params => (
      <Typography
        sx={{
          fontSize: "sm",
          fontWeight: 500,
          color: "gray.600",
        }}
      >
        {params.value}
      </Typography>
    ),
  },
  {
    field: "date",
    headerName: "Date Joined",
    flex: 1,
    minWidth: 80,
    type: "number",
    renderCell: params => (
      <Typography
        sx={{
          fontSize: "sm",
          color: "gray.500",
        }}
      >
        {params.value}
      </Typography>
    ),
  },
  {
    field: "edit",
    headerName: "",
    width: 36,
    filterable: false,
    renderCell: _params => (
      <IconButton>
        <TbPencil />
      </IconButton>
    ),
  },
]
const ROWS = [
  {
    id: 0,
    name: "Talon Kassulke",
    title: "Direct Web Facilitator",
    email: "Talon_Kassulke@yahoo.com",
    type: "Viewer",
    date: "2 Jun 2021",
  },
  {
    id: 1,
    name: "Brice Hayes",
    title: "Forward Metrics Executive",
    email: "Brice_Hayes43@yahoo.com",
    type: "Admin",
    date: "11 Apr 2021",
  },
  {
    id: 2,
    name: "Diamond Welch",
    title: "National Research Representative",
    email: "Diamond.Welch26@yahoo.com",
    type: "Member",
    date: "15 Feb 2022",
  },
  {
    id: 3,
    name: "Nedra Reynolds",
    title: "Dynamic Integration Associate",
    email: "Nedra2@yahoo.com",
    type: "Admin",
    date: "18 Nov 2021",
  },
  {
    id: 4,
    name: "Haley Corkery",
    title: "Corporate Quality Supervisor",
    email: "Haley_Corkery61@yahoo.com",
    type: "Member",
    date: "5 Feb 2022",
  },
  {
    id: 5,
    name: "Nyasia Pollich",
    title: "National Group Engineer",
    email: "Nyasia_Pollich@yahoo.com",
    type: "Admin",
    date: "12 Jun 2022",
  },
  {
    id: 6,
    name: "Felicita Mayer",
    title: "Internal Integration Officer",
    email: "Felicita61@gmail.com",
    type: "Viewer",
    date: "12 Aug 2021",
  },
  {
    id: 7,
    name: "Devante Simonis",
    title: "Future Web Executive",
    email: "Devante62@yahoo.com",
    type: "Viewer",
    date: "2 Apr 2022",
  },
  {
    id: 8,
    name: "Ramiro Von",
    title: "Corporate Branding Associate",
    email: "Ramiro82@yahoo.com",
    type: "Viewer",
    date: "18 Oct 2021",
  },
  {
    id: 9,
    name: "Brody Yost",
    title: "District Intranet Supervisor",
    email: "Brody45@gmail.com",
    type: "Admin",
    date: "20 Sept 2021",
  },
]
