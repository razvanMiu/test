@extends ('layouts.master')

@section ('content')

<div id="root" class="container" v-cloak>
	<div class="tabs is-centered">
	  <ul>
	    <li class="is-active"><a>Europe</a></li>
	    <li><a>America</a></li>
	    <li><a>Asia</a></li>
	    <li><a>Africa</a></li>
	    <li><a>Australia</a></li>
	  </ul>
	</div>
	
	<div class="europeContainer text-center">
		<img src="images/europe-map.jpg" usemap="#image-map">

		<map name="image-map">	
		    <area class="country-area" shape="poly" alt="Romania" title="Romania" href="http://google.ro" coords="1527,1767,1612,1777,1657,1754,1684,1771,1712,1775,1754,1707,1672,1603,1652,1567,1631,1578,1585,1589,1538,1570,1506,1589,1483,1635,1466,1659,1440,1669,1472,1720,1496,1741,1521,1739">
		</map>
	</div>
	

	
{{-- <image-modal v-if="showModal" @close="showModal = false">
		
	</image-modal>
	<button @click="toggleModal">Show Europe Map</button> --}}
</div>

@endsection


{{-- <img usemap="#image-map" src="https://www.travismclarke.com/imagemap/image-map-all.png">
<map name="image-map">
    <area shape="poly" alt="blue" title="blue" @click="selectRegion('blue')"
          coords="28,27,283,27,324,101,285,175,27,175">
    <area shape="poly" alt="yellow" title="yellow" @click="selectRegion('yellow')"
          coords="286,27,543,27,583,101,542,176,286,175,324,101">
    <area shape="poly" alt="pink" title="pink" @click="selectRegion('pink')"
          coords="545,28,801,27,840,100,801,175,544,175,582,101">
    <area shape="poly" alt="orange" title="orange" @click="selectRegion('orange')"
          coords="802,27,1096,27,1096,174,802,174,838,101">
</map> --}}