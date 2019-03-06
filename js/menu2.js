$(function() {
  // 表示させる要素の総数をlengthメソッドで取得
  var $numberListLen = $("#number_list li").length;
  // デフォルトの表示数
  var defaultNum = 1;
  // ボタンクリックで追加表示させる数
  var addNum = 1;
  // 現在の表示数
  var currentNum = 0;

  $("#number_list").each(function() {
    // moreボタンを表示し、closeボタンを隠す
    $(this).find("#more_btn").show();
    $(this).find("").hide();




    // defaultNumの数だけ要素を表示
    // defaultNumよりインデックスが大きい要素は隠す
    $(this).find("li:not(:lt("+defaultNum+"))").hide();

    // 初期表示ではデフォルト値が現在の表示数となる
    currentNum = defaultNum;

    // moreボタンがクリックされた時の処理
    $("#more_btn").click(function() {
      // 現在の表示数に追加表示数を加えていく


// タイマーの開始(タイムアウト後の処理も併せて記述)

   $("#more_btn img").css('animation', 'opaty 3s ease 0s 1 alternate');



      currentNum += addNum;
      // 現在の表示数に追加表示数を加えた数の要素を表示する
      $(this).parent().find("li:lt("+currentNum+")").slideDown(2500);

      // 表示数の総数よりcurrentNumが多い=全て表示された時の処理
      if($numberListLen <= currentNum) {
        // 現在の表示数をデフォルト表示数へ戻す
        currentNum = defaultNum;
        // インデックス用の値をセット
        indexNum = currentNum - 1;

        // moreボタンを隠し、closeボタンを表示する
        $("#more_btn").hide();
        $("").show();

        // closeボタンがクリックされた時の処理
        $("").click(function() {
          // デフォルト数以降=インデックスがindexNumより多い要素は非表示にする
          $(this).parent().find("li:gt("+indexNum+")").slideUp();

          // closeボタンを隠し、moreボタンを表示する
          $(this).hide();
          $("#more_btn").show();
        });
      }
    });
  });
});


$("#all").click(function() {
$('.content').css('display', 'block');
$('#number_list li').css( 'width', '100%');
$('#number_list li').css( 'float', 'none');
$('#number_list li .img').css( 'width', '50%');
$('#number_list li .img').removeClass( 'ggg');
$('.content').removeClass('hhh');
$('#number_list li').css( 'clear', 'both');

}); 
$("#part").click(function() {
$('.content').css('display', 'none');
$('#number_list li').css( 'width', '33%');
$('#number_list li').css( 'float', 'left');
$('#number_list li .img').css( 'width', '100%');
$('#number_list li .img').addClass( 'ggg');
$('.content').addClass('hhh');
$('#number_list li').css( 'clear', 'none');
$('#number_list li').css( 'height', '140px');


/*
  $(function() {
  // mouseoverを使用
  $(".img").hover(function() {
  $('#number_list li .img').css('display', 'none');
  $('.content').css('display', 'block');
  $('#number_list li').css('height', '100px');
  $('.kaito').css('display', 'none');
  $('.blog').css('display', 'none');
  $('.title').css('font-size', '20px');
  $('.content').css( 'width', '100%');
  }, function() {
    $('#number_list li .img').css('display', 'block');
    $('.content').css('display', 'none');
    $('#number_list li').css('margin-top', '0px');
    $('#number_list li').css('height', '100px');
   });
  });*/
});




