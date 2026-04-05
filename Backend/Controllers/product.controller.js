import axios from 'axios'

export const getAllProducts= async (req,res) =>{
try {
    const response =  await axios.get('https://fakestoreapi.com/products');
    res.status(200).json({
         message:"products haev been called",
         products:response.data
    }
       
    )
    console.log(response.data)
} catch (error) {
    res.status(500).json({message: "Error fetching data",error:error.message})
    console.log("error:",error)
}
}


// import axios from 'axios'

// // Fallback product data in case API fails
// const fallbackProducts = [
//     {
//         id: 1,
//         title: "Fallback Product 1",
//         price: 109.95,
//         description: "Your perfect pack for everyday use",
//         category: "men's clothing",
//         image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//     },
//     {
//         id: 2,
//         title: "Fallback Product 2",
//         price: 22.3,
//         description: "Slim-fitting style",
//         category: "men's clothing",
//         image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UX679_.jpg"
//     }
// ];

// export const getAllProducts = async (req, res) => {
//     try {
//         console.log('🔄 Attempting to fetch products from API...');
        
//         const response = await axios.get('https://fakestoreapi.com/products', {
//             timeout: 10000 // 10 second timeout
//         });
        
//         console.log('✅ API request successful');
//         res.status(200).json({
//             message: "Products retrieved successfully from API",
//             products: response.data,
//             count: response.data.length,
//             source: "api"
//         });
        
//     } catch (error) {
//         console.log('❌ API failed:', error.message);
//         console.log('📦 Using fallback data instead');
        
//         // Return fallback data instead of error
//         res.status(200).json({
//             message: "Using fallback products (API unavailable)",
//             products: fallbackProducts,
//             count: fallbackProducts.length,
//             source: "fallback",
//             api_error: error.message
//         });
//     }
// }