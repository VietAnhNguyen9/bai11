for (;;) {
    let temperature = prompt('Nhập nhiệt độ hiện tại:');
    if (temperature > 100) {
        alert('Nhiệt độ hiện tại cao hơn 100 độ. Vui lòng giảm nhiệt độ.');
    } else if (temperature < 20) {
        alert('Nhiệt độ hiện tại thấp hơn 20 độ. Vui lòng tăng nhiệt độ.');
    } else {
        alert('Nhiệt độ hiện tại là ' + temperature + ' độ.');
        break;
    }
}