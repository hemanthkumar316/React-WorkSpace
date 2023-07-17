import React, { useState } from "react";

const CreateNewProduct = () => {
  const apiUrl = "https://lobster-app-ddwng.ondigitalocean.app/product/add_new";
  const apiKey = "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH";
  const [errorMessages, setErrorMessages] = useState({});
  const [products, setProducts] = useState([]);

  const [formvalues, setFormValues] = useState({
    product_name: "",
    original_price: "",
    sale_price: "",
    product_type: "",
    description: "",
  });

  //   event.preventDefault();
  //   console.log(formvalues);
  //   const payload = {

  //  //?
  //   };

  //   fetch(apiUrl, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'api_key': apiKey
  //     },
  //     body: JSON.stringify(payload)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.message); // Log the response data for debugging purposes
  //       setApi(data.message);

  //       if (data.error) {
  //         console.log('Product creation failed');
  //         // Handle error messages
  //         const errorMessages = data.error;
  //         // Update the state with the error messages received
  //         setErrorMessages(errorMessages);
  //       } else {
  //         console.log('Product created successfully');
  //         // Reset the form values
  //         setFormValues({
  //           product_name: '',
  //           original_price: '',
  //           sale_price: '',
  //           product_type: '',
  //           description: ''
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       // Handle any error that occurs during the request
  //     });
  // };
  const handleCreateProduct = (event) => {
    event.preventDefault();
    console.log(formvalues);

    const payload = {
      product_name: formvalues.product_name,
      original_price: formvalues.original_price,
      sale_price: formvalues.sale_price,
      product_type: formvalues.product_type,
      description: formvalues.description,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        api_key: apiKey,
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Log the response data for debugging purposes
        setProducts(data.message);

        if (data.error) {
          console.log("Product creation failed");
          // Handle error messages
          const errorMessages = data.error;
          // Update the state with the error messages received
          setErrorMessages(errorMessages);
        } else {
          console.log("Product created successfully");
          // Reset the form values
          setFormValues({
            product_name: "",
            original_price: "",
            sale_price: "",
            product_type: "",
            description: "",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle any error that occurs during the request
      });
  };

  const changeHandler = (e) => {
    setFormValues({ ...formvalues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <pre>{JSON.stringify(products)}</pre>
      <h2>Create New Product</h2>
      <form onSubmit={handleCreateProduct}>
        <input
          type="text"
          className="form-control-lg"
          name="product_name"
          value={formvalues.product_name}
          onChange={changeHandler}
          placeholder="Product Name"
        />
        <input
          type="number"
          name="original_price"
          className="form-control-lg"
          value={formvalues.original_price}
          onChange={changeHandler}
          placeholder="Original Price"
        />
        <input
          type="number"
          name="sale_price"
          className="form-control-lg"
          value={formvalues.sale_price}
          onChange={changeHandler}
          placeholder="Sale Price"
        />
        <input
          type="number"
          name="product_type"
          className="form-control-lg"
          value={formvalues.product_type}
          onChange={changeHandler}
          placeholder="Product Type"
        />
        <input
          type="text"
          name="description"
          className="form-control-lg"
          value={formvalues.description}
          onChange={changeHandler}
          placeholder="Description"
        />
        <button className="btn btn-primary btn-lg mb-2">Create Product</button>
      </form>
    </div>
  );
};

export default CreateNewProduct;
