<!DOCTYPE html>
<html lang="ru" dir="ltr">
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" crossorigin="anonymous">
		<title>Редактор активов</title>
	</head>
	<body>


		<div id="exampleModalLive" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
			 <div class="modal-dialog modal-xl">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="staticBackdropLabel">Добавить актив</h5>
		        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <div class="modal-body">
						<h2 id="h-form" style="text-align: center;">Выберите тип и введите название актива</h2>
						<form name="publish">
							<input id="nameActive" class="inp_name mb-3" type="text" name="name" placeholder="введите название">
						</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
		        <button id="put-act" type="button" class="btn btn-success" data-dismiss="modal">Добавить</button>
		      </div>
		    </div>
		  </div>
		</div>


		<?php require "components/header.php" ?>


		<div class="row m-0">
				<!-- настройки активов -->
		    <div class="col-3 p-0">


				</div>

				<!-- активы -->
		    <div class="col-9">
					<div class="buttons">
						<button type="button" id="put_act_main" class="btn btn-success mt-3" data-toggle="modal" data-target="#exampleModalLive">Добавить</button>
					</div>
					<div class="acives">

					</div>
				</div>
		 </div>


		 <script src="js/test.js" type="module"></script>
		 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
		 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
	</body>
</html>
