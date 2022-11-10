(function () {
    $(document).ready(function () {
        $(".btn-menu").click(function () {

            var filtro = $(this).attr("data-filter");

            if (filtro == "todos") {
                $(".grid-item").show(500);
            } else {
                $(".grid-item").not("." + filtro).hide(500);
                $(".grid-item").filter("." + filtro).show(500);
            }

        });

        $("ul li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            })

    });
}());

