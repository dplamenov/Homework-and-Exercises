<body style="background-color: #cccccc">
<form method="post" action="oddOrEven.php">
    <input type="number" name="number"/>
    <input type="submit"/>
</form>
</body>
<?php
if (isset($_POST['number'])) {
    $number = filter_var($_POST['number'], FILTER_VALIDATE_INT);
    for ($i = 1; $i <= $number; $i++) {
        if ($i % 2 == 0) {
            echo '<p style="color:#ff7a4a;">' . $i . '</p>' . PHP_EOL;
        } else {
            echo '<p style="color:#09ffc0;">' . $i . '</p>' . PHP_EOL;
        }
    }
}
?>
