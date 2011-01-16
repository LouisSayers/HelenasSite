<%@ Page Language="C#" MasterPageFile="~/Views/Shared/HelenaPhotography.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ContentPlaceHolderID="HeaderContent" runat="server">
    <script type="text/javascript" src="/Content/Scripts/supersized.3.0.core.js"></script> 
	<script type="text/javascript">
	    $(function () {
	        $.fn.supersized.options = {
	            startwidth: 783,
	            startheight: 513,
	            vertical_center: 1,
                vertical_offset: 130,
	            slides: [
					{ image: '/Content/Images/Homebackground.png' }
				]
	        };
	        $('#supersized').supersized();
	    });
	</script> 
</asp:Content>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Helena Photography - Home
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
   
</asp:Content>
