https://github.com/laravel/framework/blob/5.3/src/Illuminate/Routing/Router.php
Link về class Auth : ))). đọc code thấy quá kinh
$this->post('logout', 'Auth\LoginController@logout')->name('logout');
link đến logout x
// make button logout
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            Logout
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                </ul>
                how to use route laravel in file javscript ???
            follow below code
       tip 1:
       $(".waitingTime .button").click(function () {
        window.location.href = "{{URL::to('restaurants/20')}}"
      });
      tip2:
      <div class="waitingTime">
     <button class="button link-button" data-href="{{URL::to('restaurants/20')}}">
      Click me
      </button>
    </div>

      $(".link-button").click(function () {
        window.location.href = $(this).data('href');
      });
