import * as httpClient from "../httpClient/axiosHttpClient.js";
import * as generator from "../utils/generator.js";

const baseUrl = "http://localhost:8080/api/productos";

const test = async () => {
  try {
    console.log("\n************** Listar todos los productos ***************");
    let { data } = await httpClient.getRequest(baseUrl);
    console.log(data);

    console.log("\n************* Crear un nuevo producto (A) ***************");
    const newProductDataA = generator.get();
    data = (await httpClient.postRequest(baseUrl, newProductDataA)).data;
    console.log(data);

    console.log("\n*************** Crear otro producto (B) *****************");
    const newProductDataB = generator.get();
    data = (await httpClient.postRequest(baseUrl, newProductDataB)).data;
    console.log(data);

    console.log("\n************ Mostrar el producto creado (B) *************");
    const productBId = data?.newProduct?.id;
    data = (await httpClient.getRequest(`${baseUrl}/${productBId}`)).data;
    console.log(data);

    console.log("\n*********** Modificar el producto creado (B) ************");
    const updateData = {
      title: "Producto B Modificado",
      price: "123"
    };
    data = (await httpClient.putRequest(`${baseUrl}/${productBId}`, updateData))
      .data;
    console.log(data);

    console.log("\n************ Borrar el producto creado (B) **************");
    data = (await httpClient.deleteRequest(`${baseUrl}/${productBId}`)).data;
    console.log(data);

    console.log("\n************** Listar todos los productos ***************");
    data = (await httpClient.getRequest(baseUrl)).data;
    console.log(data);
  } catch (error) {
    console.log(`Error durante el proceso de testeo: ${error}`);
  }
};

test();
