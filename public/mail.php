<?php
    $email = $_POST['user_phone'];
    $message = "Пользователь оставил заявку,\nего телефон: $phone";
    $message = wordwrap($message, 70);
    var_dump(mail('info@r-weld.ru', 'Заявка с сайта', $message));
?>