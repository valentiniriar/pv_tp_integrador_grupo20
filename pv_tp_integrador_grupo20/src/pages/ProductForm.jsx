import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", // Imagen por defecto
  });

  const [imagePreview, setImagePreview] = useState(formData.image);

  useEffect(() => {
    if (isEditing) {
      const productToEdit = products.find((p) => p.id.toString() === id);
      if (productToEdit) {
        setFormData(productToEdit);
        setImagePreview(productToEdit.image); // Actualiza la previsualización
      }
    }
  }, [id, isEditing, products]);

  useEffect(() => {
    setImagePreview(formData.image);
  }, [formData.image]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
        setImagePreview(reader.result);
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateProduct(formData);
    } else {
      addProduct(formData);
    }
    navigate("/");
  };

  const handleDelete = () => {
    if (
      window.confirm(
        "¿Estás seguro de que quieres eliminar este producto? Esta acción es irreversible."
      )
    ) {
      deleteProduct(formData.id);
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h1>{isEditing ? "Edit Product" : "Create New Product"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="imageFile">Product Image</label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                maxWidth: "100px",
                marginTop: "10px",
                borderRadius: "8px",
              }}
            />
          )}
        </div>

        <div className="form-group">
          <label htmlFor="title">Name</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            step="0.01"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {isEditing ? "Save Changes" : "Create Product"}
          </button>
          {isEditing && (
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete Product
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
