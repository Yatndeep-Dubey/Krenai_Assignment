import React from 'react'
import {useState,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,Image,ActivityIndicator} from 'react-native'
import { ProductNavbar } from '../components/ProductNavbar'
import Octicons from 'react-native-vector-icons/Octicons';
import Hearto from 'react-native-vector-icons/AntDesign';
import {useFonts} from 'expo-font'
import axios from 'axios'
function ProudctScreen() {
   const [products,setProducts] = useState([])
   const [loading,setLoading] = useState(false)
    useEffect(()=>
    {
      axios.get('https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100')
      .then(res=>setProducts(res.data.object))
      .catch(err=>console.log(err))
    },[])
    const [loaded] = useFonts({
      Poppins_Medium : require('../../assets/fonts/Poppins-Medium.ttf'),
      Poppins_Regular : require('../../assets/fonts/Poppins-Regular.ttf'),
      POPPINS_BOLD : require('../../assets/fonts/Poppins-Bold.ttf')
  })
    if(!loaded)
    {
      return null;
    }
   
  return (
     <View>
        <ProductNavbar/>
        {/* Product Screen SubNavbar */}
       <View style={styles.productsubnav}>
         <View>
            <Text style={{color:'gray',fontFamily:'Poppins_Regular'}}>98/100 Products</Text>
         </View>
          <View style={{display:'flex', flexDirection:"row",justifyContent:'space-between', width:'33%'}}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between', width:'40%'}}>
               <Octicons
               name="sort-asc"
               color={'gray'}
               size={20}
               />
               <Text style={{color:'gray',fontFamily:"Poppins_Regular"}}>Sort</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between',width:'45%' }}>
               <Image source={require('../../assets/filter_icon.png')} style={{height:20,width:20}}/>
               <Text style={{color:'gray',fontFamily:'Poppins_Regular'}}>Filter</Text>
            </View>
          </View>   
       </View>
       {/*Product Screen*/}
       {loading?<ActivityIndicator size="large" color="#00ff00" />:
       <View style={{marginBottom:200}}>
           <FlatList
            data={products}
            renderItem={({item})=>(<View style={styles.product_container}>
               <View style={{position:'relative'}}>
                <Hearto
                  name="hearto"
                  size={25}
                  style={{zIndex:1,position:'absolute',top:10,right:10}}
                  />
                <Image 
                 source={{uri:item.mediaUrl}}
                 style={{width:'100%',height:200,borderRadius:5}}
                />
             </View>
                
               <View style={{padding:10}}> 
                <Text style={{fontFamily:'POPPINS_BOLD'}}>12 STOREEZ</Text>
               <Text style={{fontSize:15,fontFamily:'Poppins_Medium'}}>{item.name}</Text>
               <Text style={{fontFamily:'Poppins_Regular'}}>₹ {item.variants[0].mrp}</Text>
              </View>
            </View>)}
            numColumns={2}
           />
       </View>
}
     </View>
  )
}

const styles = StyleSheet.create({
   productsubnav:{
       paddingHorizontal:10,
       paddingTop:15,
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-between',
       paddingBottom:20,
   },
   product_container:{
      width:'45%',
      margin:10
   }
})

export default ProudctScreen