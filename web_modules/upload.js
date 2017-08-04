const uploadfile = params => {
    const url = params.url;
    const target = params.target;
    const success = params.success;
    if(target && target.files && target.files.length>0) {
        var form = new FormData();
        for (var i = 0; i <= target.files.length - 1; i++) {
            var name = i == 0 ? 'file' : 'file' + i;
            form.append(name, target.files[i])
        }

        var FileController = url;  // 接收上传文件的后台地址
        // XMLHttpRequest 对象
        var xhr = new XMLHttpRequest();
        xhr.open("post", FileController, true);
        xhr.setRequestHeader("Acc-Token",localStorage.getItem('token'));

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {

                    var response = xhr.responseText;

                    try {
                        response = JSON.parse(response);

                    }catch(ex) {
                        console.log(ex);
                    }

                    success && success(response)

                }
            }
        };
        xhr.send(form);
    }
};


export default uploadfile;