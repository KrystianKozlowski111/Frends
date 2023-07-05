$ ->
  $('#fetchButton').click ->
    $.ajax
      url: 'http://localhost:3000/cars'
      dataType: 'json'
      success: (data) ->
        template = Handlebars.compile($('#template').html())
        result = template(data)
        $('#resultContainer').html(result)
