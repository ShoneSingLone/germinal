import Login from "./LoginWrap";
import { LogoSVG } from "ysrc/components/LogoSVG";
import { defineComponent } from "vue";

export const LoginView = defineComponent({
	render() {
		return (
			<div class="g-body login-body flex1">
				<div class="m-bg">
					<div class="m-bg-mask m-bg-mask0" />
					<div class="m-bg-mask m-bg-mask1" />
					<div class="m-bg-mask m-bg-mask2" />
					<div class="m-bg-mask m-bg-mask3" />
				</div>
				<div class="main-one login-container">
					<div class="container">
						<aRow type="flex" justify="center">
							<aCol xs={20} sm={16} md={12} lg={8} class="container-login">
								<aCard class="card-login">
									<h2 class="login-title">YAPI</h2>
									<div class="login-logo">
										<LogoSVG length="100px" />
									</div>
									<Login />
								</aCard>
							</aCol>
						</aRow>
					</div>
				</div>
			</div>
		);
	}
});
