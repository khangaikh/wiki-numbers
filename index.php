<?php
    require_once 'includes/Twig/Autoloader.php';
    require_once "config.php";

    //Register autoloader
    Twig_Autoloader::register();
    //Loader for template files
    $loader = new Twig_Loader_Filesystem('templates');
    //Twig instance
    $twig = new Twig_Environment($loader, array(
        'cache' => 'cache',
    ));
    //Load template file
    function fixObject (&$object)
    {
      if (!is_object ($object) && gettype ($object) == 'object')
        return ($object = unserialize (serialize ($object)));
      return $object;
    }
    $twig->setCache(false);

    $template = $twig->loadTemplate('home.html');
    echo $template->render(array('title' => 'Home1'));

?>
    
