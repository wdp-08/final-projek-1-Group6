import dashboardAdmin from '../../utils/dashboard';
import {
  addClassElement, getUserInfo, innerElement, redirect,
} from '../../utils/functions';

const Dashboard = {
  async render() {
    return `
    <section class="" style="overflow-x: hidden;">
      <div class="row">
        <div class="col-md-3 col-sm-1 col-1 p-5">
            <aside-element></aside-element>
        </div>
        <div class="col-md-9 col-sm-11 col-11 p-5 border-start border-secondary" style="height: 100vh">
            <h3>Dashboard</h3>
            <div class="row py-3">
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-4">
                        <i class="bi bi-bar-chart-line-fill fs-1 ms-3"></i>
                      </div>
                      <div class="col-8">
                        <h4 class="fw-bold">Total Produk</h4>
                        <h5 class="fw-bold text-warning" id="totalProduk">0</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-4">
                        <i class="bi bi-bar-chart-line-fill fs-1 ms-3"></i>
                      </div>
                      <div class="col-8">
                        <h4 class="fw-bold">Checkout</h4>
                        <h5 class="fw-bold text-warning" id="totalCheckout">0</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-4">
                        <i class="bi bi-bar-chart-line-fill fs-1 ms-3"></i>
                      </div>
                      <div class="col-8">
                        <h4 class="fw-bold">Total User</h4>
                        <h5 class="fw-bold text-warning" id="totalUser">0</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const userAccess = getUserInfo();
    if (userAccess) {
      if (userAccess.role !== 'admin') {
        redirect('#/');
      } else {
        document.querySelectorAll('.nav-link').forEach((link) => {
          link.classList.remove('active');
        });
        document.querySelectorAll('.aside-link').forEach((link) => {
          link.classList.remove('btn-warning');
        });
        addClassElement('#dashboard', 'btn-warning');
        const allCount = await dashboardAdmin.init();
        innerElement('#totalProduk', `${allCount.countProduct} Produk`);
        innerElement('#totalCheckout', `${allCount.countCheckout} Checkout`);
        innerElement('#totalUser', `${allCount.countUser} User`);
      }
    } else {
      redirect('#/');
    }
  },
};

export default Dashboard;
