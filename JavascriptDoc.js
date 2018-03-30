Object.assign(); // function nối giữa các object đọc lập lai với nhau bởi 3 đối số
// sử lý xóa phần tử  trên giao diện
  $(".deletegv").on("click", function() {
     let flag= confirm("Are you Sure Delete ???? : (((");
     if(flag==true){
         $(this)
                      .parent()
                      .parent()
                      .parent()
                      .remove();
                    }
    
    console.log("click!!!!!");
  });
