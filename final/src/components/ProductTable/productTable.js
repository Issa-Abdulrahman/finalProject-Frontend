import React, {useState} from "react";
import style from "./productTable.module.css";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import axios from "axios";
import {toast} from "react-toastify"


function AddProduct() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        stock: "",
        category: "",
        brand: ""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleImageChange = async (e) => {
        try {
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append("image", file);
          const response = await axios.post(
            "https://api.imgbb.com/1/upload?key=268f44c0b0444e18ebac10c0e5823c72",
            formData
          );
          setFormData((prevData) => ({
            ...prevData,
            image: response.data.data.display_url
          }));
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };
    
      const postProduct = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND}product/create`,
            formData
          );
          toast.success("Product added successfully");
          console.log(response.data);
        } catch (error) {
          toast.error("An error occurred while adding the product");
          console.error("Error adding product:", error);
        }
      };
    
      return (
        <form className={style.wrapper} onSubmit={postProduct}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: " 0 20px",
            }}
            noValidate
            autoComplete
          >
            <p>Product Name</p>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </Box>
    
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: " 0 20px",
            }}
            noValidate
            autoComplete
          >
            <p>Description</p>
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </Box>
    
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: " 0 20px",
            }}
            noValidate
            autoComplete
          >
            <p>Price</p>
            <TextField
              name="price"
              label="Price"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </Box>
    
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: " 0 20px",
            }}
            noValidate
            autoComplete
          >
            <p>Stock</p>
            <TextField
              name="stock"
              label="Stock"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </Box>
    
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: " 0 20px",
            }}
            noValidate
            autoComplete
          >
            <p>Category</p>
            <TextField
              name="category"
              label="Category"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </Box>
    
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: " 0 20px",
            }}
            noValidate
            autoComplete
          >
            <p>Brand</p>
            <TextField
              name="brand"
              label="Brand"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </Box>
    
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: " 0 20px",
            }}
            noValidate
            autoComplete
          >
            <p>Upload Image</p>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              name="image"
              accept="image/*"
              required
            />
          </Box>
    
          <button type="submit" className={style.add}>
            Add Product
          </button>
        </form>
      );
    };
export default AddProduct;