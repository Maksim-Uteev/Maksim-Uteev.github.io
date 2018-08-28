<?php
    $name = $_POST['order-name'];
    $phone = $_POST['order-phone'];
    $street = $_POST['order-street'];
    $home = $_POST['order-home'];
    $part = $_POST['order-part'];
    $appartament = $_POST['order-appartament'];
    $floor = $_POST['order-floor'];
    $comment = $_POST['order-comment'];
    $callback = $_POST['order-callback'];
    $payment = $_POST['order-payment'];
    $payment = isset($payment) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заказ</title>
    </head>
    <body>
        <h2>Сейчас</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Адрес: улица: ' . $street . ', дом ' . $home . ', корпус '. $part .', квартира ' . $appartament . ', этаж ' . $floor . ' </li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Служба доставки Бургеров <burger@burger.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('max.uteev@yandex.ru', 'Заказ', $mail_message, $headers);

    $data = [];
?>