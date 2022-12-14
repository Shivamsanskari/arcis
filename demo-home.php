<?php
/**
 * Template Name: Demo Home Page Template
 * Template Post Type: Page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */
 get_header(); 
?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">

	<section class="homebanner_section">
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
			<!-- Home Slider -->
			<?php $slider_args = array(  
						'post_type' => 'gallery',						
						'tax_query' => array(
								array(
									'taxonomy' => 'gallery_categories',
									'field'    => 'slug',
									'terms'    => 'home-slider',
								),
                        ),						
						'posts_per_page' => -1, 
						'orderby' => 'id', 
						'order' => 'ASC',       
					);
                   $slider_loop = new WP_Query( $slider_args );   
		    ?>		   
			
			<ol class="carousel-indicators">
			 <?php   
                   $ct = 0;				
                   while ( $slider_loop->have_posts() ) : $slider_loop->the_post(); 					
                   ?>
				   <li data-target="#myCarousel" data-slide-to="<?php echo $ct; ?>" <?php echo ($ct == 0) ? 'class="active"' : '';?>></li>				  			                     	   
                    <?php 
					$ct++;
					endwhile;
				   wp_reset_postdata(); 
				   ?>				
			</ol>
			<!-- Wrapper for slides -->
			<div class="carousel-inner">
			 <!-- Video Gallery Start -->
                <?php   
                   $cnt = 1;				
                   while ( $slider_loop->have_posts() ) : $slider_loop->the_post();   
					$slider_pic = get_the_post_thumbnail_url(get_the_ID(),'full'); 
                   ?>
				   <div class="item <?php echo ($cnt == 1) ? 'active' : '';?>">
					<a href="<?php echo get_the_content();?>">
						<img src="<?php echo esc_url($slider_pic)?>" alt="<?php the_title();?>" style="width:100%;">
					</a>
				</div>				                     	   
                    <?php 
					$cnt++;
					endwhile;
				   wp_reset_postdata(); 
				   ?>
			</div>

			<!-- Left and right controls -->
			<a class="left carousel-control" href="#myCarousel" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="right carousel-control" href="#myCarousel" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	</section>
	
	<section class="about_section" id="about">
		<div class="container">
			<?php the_content(); ?>
			<div class="join_hcl">
			<div class="row show-on-scroll">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<div class="abt_cont">
							<?php echo get_field('hcl_in_vietnam');?>
						</div>	
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="show-on-scroll latestSec">
		<div class="container">
			<div class="inner laUpdates">
				<h2>LATEST UPDATES</h2>			
                <?php $update_args = array(  
						'post_type'   => 'post',	
						'cat' => 1,
						'posts_per_page' => 3,
						'post_status' => 'publish',					
						'orderby'	  => 'date',
						'order'		  => 'DESC'      
					);
                   $up_loop = new WP_Query( $update_args );         
                   while ( $up_loop->have_posts() ) : $up_loop->the_post();         
                   ?>
				   <div class="col-md-4 col-sm-12 col-xs-12">
					<div class="laUpdates">
						<h4><?php //the_title(); ?></h4>
						<?php //the_content(); 
						$content = get_the_content();
                        echo substr($content, 0, 300);						
						?>
						<p><a class="btn" href="https://www.hclvietnam.com/whats-new/">Read More</a></p>
					</div>
				</div>                   	   
                    <?php endwhile;
				   wp_reset_postdata(); 
				   ?>
				   </div>
				   </div>
			</div>
		</div>
	</section>
	<section class="show-on-scroll">
		<div class="container">
			<div class="inner picGallery">
				<h2>PICTURE GALLERY</h2>
				<div class="owl-carousel owl-theme picture-gallery">
				<!-- Picture Gallery Start -->
                <?php $args = array(  
						'post_type'   => 'post',	
						'cat' => 1,						
						'post_status' => 'publish',					
						'orderby'	  => 'date',
						'order'		  => 'DESC'        
					);
                   $loop = new WP_Query( $args );         
                   while ( $loop->have_posts() ) : $loop->the_post();         
		           $gall_img = get_the_post_thumbnail_url(get_the_ID(),'full'); 
		           ?>
                   <div class="item-video col-sm-12">
						<div class="embed-responsive embed-responsive-4by3">
							<img src="<?php echo esc_url($gall_img)?>" alt="<?php the_title();?>">
						</div>
						<h4><?php the_title();?></h4>
					</div>	   
                    <?php endwhile;
				   wp_reset_postdata(); 
				   ?>
				   </div>
				   </div>				
				  <!-- Picture Gallery End -->
				</div>
			</div>
		</div>
	</section>
	<section class="about_section_inner">
		<div class="container" style="padding-bottom: 50px;">
			<div class="video">
				<h2 class="text-center text-uppercase">Video Gallery</h2>
			</div>
			<div class="owl-carousel owl-theme videoGallery">
                <!-- Video Gallery Start -->
                <?php $vid_args = array(  
						'post_type' => 'gallery',						
						'tax_query' => array(
								array(
									'taxonomy' => 'gallery_categories',
									'field'    => 'slug',
									'terms'    => 'video-gallery',
								),
                        ),						
						'posts_per_page' => -1, 
						'orderby' => 'id', 
						'order' => 'ASC',       
					);
                   $vid_loop = new WP_Query( $vid_args );         
                   while ( $vid_loop->have_posts() ) : $vid_loop->the_post();       
                   ?>
				   <div class="item-video">
					 <div class="embed-responsive embed-responsive-16by9">
						<iframe class="embed-responsive-item w-100" src="<?php echo get_the_content();?>" allowfullscreen="allowfullscreen"></iframe>
					 </div>
				   </div>                   	   
                    <?php endwhile;
				   wp_reset_postdata(); 
				   ?>
				   </div>
				   </div>				
				  <!-- Video Gallery End -->
				</div>
		</div>			
	</section>
	
	
<?php get_footer(); ?>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script> -->
<style>
/* @media (max-width: 1023px) { */
	.pt-pb {
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.owl-theme .owl-nav [class*=owl-] {
		font-size: 24px !important;
		background-color: #006cb7 !important;
		padding: 5px 15px !important;
	}
	.owl-theme .owl-nav [class*=owl-] span {
		display: inline-block;
		margin-top: -3px;
		vertical-align: text-bottom
	}
/* } */
</style>
<script>
$('.videoGallery').owlCarousel({
        loop:true,
        margin:10,
		nav: true,
		navigationText: [
			"<i class='fa fa-chevron-left'></i>",
			"<i class='fa fa-chevron-right'></i>"
			],
		dots: false,
        responsive:{
            0:{
                items:1,
				nav: true
            },
            480:{
                items:1,
				nav: true
            },
            600:{
                items:2,
				nav: true
            },
            992:{
                items:2,
				nav: true
            }
            // 1200:{
            //     items:2,
			// 	nav: true
            // }
        }
    });
	$('.picture-gallery').owlCarousel({
        loop:true,
        margin:10,
		nav: true,
		navigationText: [
			"<i class='fa fa-chevron-left'></i>",
			"<i class='fa fa-chevron-right'></i>"
			],
		dots: false,
        responsive:{
            0:{
                items:1,
				nav: true
            },
            600:{
                items:2,
				nav: true
            },
            992:{
                items:3,
				nav: true
            }
            // 1200:{
            //     items:3,
			// 	nav: true
            // }
        }
    })
</script>