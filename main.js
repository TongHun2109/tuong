<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang Web</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 100px;
        }
        .form-container {
            position: absolute;
            background-color: pink;
            padding: 20px;
            border: 1px solid black;
            display: none;
        }
        #message {
            font-size: 20px;
            color: blue;
            cursor: pointer;
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <!-- Dòng chữ để người dùng nhấn vào -->
    <div id="message" onclick="openForms()">Anh có điều muốn nói</div>

    <script>
        // Hàm sẽ tạo form khi người dùng nhấn vào "Anh có điều muốn nói"
        function openForms() {
            // Tạo 50 form với nội dung "Tràn ngập bộ nhớ"
            for (let i = 0; i < 50; i++) {
                createForm(i);
            }
        }

        // Hàm tạo form với nội dung và vị trí ngẫu nhiên
        function createForm(index) {
            let form = document.createElement('div');
            form.classList.add('form-container');
            form.innerText = "Tràn ngập bộ nhớ " + (index + 1);

            // Vị trí ngẫu nhiên trên màn hình
            form.style.top = Math.random() * window.innerHeight + "px";
            form.style.left = Math.random() * window.innerWidth + "px";

            // Hiển thị form
            document.body.appendChild(form);
            form.style.display = "block";
        }
    </script>

</body>
</html>
