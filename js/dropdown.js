$(document).ready(function(){
  $("ul.studies-drop").hide();

    var isMousedOver;

    var hideDropdown = function(a) {
            setTimeout( function() {
                if (isMousedOver) return;
                $("ul.studies-drop").slideUp("medium");
                $(a).removeClass("active");
            }, 150);
    }

    $("li.studies").hover(
        function(){
            $("ul.studies-drop").stop(true,true).slideDown("medium");
            isMousedOver = true;
            $("li.studies").removeClass("active");
            $(this).addClass("active");
            var that = this;
            $("ul.studies-drop").data("mouseoutfn", function() { hideDropdown(that) });
        },
        function(){
            isMousedOver = false;
            hideDropdown(this);
        }
    );

    $("ul.studies-drop").hover(
        function() {
            isMousedOver = true;
        },
        function() {
            isMousedOver = false;
            $(this).data("mouseoutfn")();
        }
    );

});

$(document).ready(function(){
  $("ul.educations-drop").hide();

    var isMousedOver;

    var hideDropdown = function(a) {
            setTimeout( function() {
                if (isMousedOver) return;
                $("ul.educations-drop").slideUp("medium");
                $(a).removeClass("active");
            }, 150);
    }

    $("li.educations").hover(
        function(){
            $("ul.educations-drop").stop(true,true).slideDown("medium");
            isMousedOver = true;
            $("li.educations").removeClass("active");
            $(this).addClass("active");
            var that = this;
            $("ul.educations-drop").data("mouseoutfn", function() { hideDropdown(that) });
        },
        function(){
            isMousedOver = false;
            hideDropdown(this);
        }
    );

    $("ul.educations-drop").hover(
        function() {
            isMousedOver = true;
        },
        function() {
            isMousedOver = false;
            $(this).data("mouseoutfn")();
        }
    );

});

$(document).ready(function(){
  $("ul.videos-drop").hide();

    var isMousedOver;

    var hideDropdown = function(a) {
            setTimeout( function() {
                if (isMousedOver) return;
                $("ul.videos-drop").slideUp("medium");
                $(a).removeClass("active");
            }, 150);
    }

    $("li.videos").hover(
        function(){
            $("ul.videos-drop").stop(true,true).slideDown("medium");
            isMousedOver = true;
            $("li.videos").removeClass("active");
            $(this).addClass("active");
            var that = this;
            $("ul.videos").data("mouseoutfn", function() { hideDropdown(that) });
        },
        function(){
            isMousedOver = false;
            hideDropdown(this);
        }
    );

    $("ul.videos-drop").hover(
        function() {
            isMousedOver = true;
        },
        function() {
            isMousedOver = false;
            $(this).data("mouseoutfn")();
        }
    );

});