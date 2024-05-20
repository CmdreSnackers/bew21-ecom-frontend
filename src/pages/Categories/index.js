import { useState } from "react";
import {
  Button,
  Typography,
  Container,
  TextField,
  Box,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";
import Header from "../../components/Header";
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../../utils/api_categories";
import { useSnackbar } from "notistack";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function CategoryPage() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const [cookies] = useCookies(["currentUser"]);
  const { currentUser = {} } = cookies;
  const { token } = currentUser;

  const [name, setName] = useState("");

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  const addCategoryMutation = useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      enqueueSnackbar("Added Category", {
        variant: "success",
      });

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (e) => {
      enqueueSnackbar(e.response.data.message, {
        variant: "error",
      });
    },
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      enqueueSnackbar("Deleted Category", {
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
      });
    },
  });

  const handleAddCategory = (e) => {
    e.preventDefault();
    addCategoryMutation.mutate({
      name: name,
      token: token,
    });
  };

  const handleUpdateCategory = (id) => {};

  console.log(categories);

  return (
    <Container>
      <Header />
      <Typography variant="h5" gap={"5px"} sx={{ marginTop: "20px" }}>
        Add New Category
      </Typography>
      <Divider />
      <Box display="flex" sx={{ marginTop: "10px" }}>
        <TextField
          label="Category Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          onClick={handleAddCategory}
          variant="contained"
          sx={{
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          Add
        </Button>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: "1200px", marginTop: "20px" }}
        align="center"
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          {categories.length > 0 ? (
            <TableBody>
              {categories.map((c) => (
                <TableRow key={c._id}>
                  <TableCell align="left">{c.name}</TableCell>

                  <TableCell align="right">
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => {
                        handleUpdateCategory();
                      }}
                      sx={{ marginRight: "10px" }}
                    >
                      Edit
                    </Button>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => {
                        const confirm = window.confirm("Delete Category?");
                        if (confirm) {
                          deleteCategoryMutation.mutate({
                            _id: c._id,
                            token: token,
                          });
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography variant="h6">Categories</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Container>
  );
}
