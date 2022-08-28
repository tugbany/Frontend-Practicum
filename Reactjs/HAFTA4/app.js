import axios from "axios";
//asenkron fonksiyon tanımlandı
    const userData = async (id) => {
//await axios ile istekler atıldı.
    const {data: user} = await axios (
        ("https://jsonplaceholder.typicode.com/users/" + id)
      );

    const {data:posts} = await axios(
        ("https://jsonplaceholder.typicode.com/posts?userId=" + id)
    );
    
    //obje tipinde fonksiyonlar console da yazdırıldı.
    console.log({user, posts});
}

// fonksiyon default olarak dışa aktarıldı.
export default userData;