document.addEventListener("DOMContentLoaded",function(){
	document.write('BAI 1:' + "<br/>");
	function Sinhvien(ten,tuoi,gioitinh,banbe,nguoiyeu,sothich,trangthaitinhcam){
		this.ten = ten;
		this.tuoi = tuoi;
		this.gioiTinh = gioitinh;
		this.banBe = banbe;
		this.nguoiYeu = nguoiyeu;
		this.soThich = sothich;
		this.trangThaiTinhCam = trangthaitinhcam;
		this.lamquen = function(tenbanmoi){
			this.tenbanmoi = tenbanmoi;
			document.write('Ten ban moi: ' + this.tenbanmoi + "<br/>");
		};
		this.totinh = function(tenbantotinh){
			this.tenbantotinh = tenbantotinh;
			document.write('Ten ban to tinh: ' + this.tenbantotinh + "<br/>");
		};
		this.yeu = function(tenbanyeu){
			this.tenbanyeu = tenbanyeu;
			document.write('Ten ban yeu: ' + this.tenbanyeu + "<br/>");
		};
		this.dichoi = function(tenbandichoi){
			this.tenbandichoi = tenbandichoi;
			document.write('Ten ban di choi: ' + this.tenbandichoi + "<br/>");
		}
	}
	var Sinhvien1 = new Sinhvien('Hieu',22,'nam', 'Tung, Cuong, Quy','none','dabong','none');
	Sinhvien1.lamquen('Chinh');
	Sinhvien1.totinh('Chinh');
	Sinhvien1.yeu('Chinh');
	Sinhvien1.dichoi('Chinh');
	document.write("<br/>");

	document.write("BAI 2:" + "<br/>");
	function Kid (ten,tuoi,gioitinh,sothich){
		this.lamtoan = function(a,b,pheptoan){
			if(pheptoan == '+'){
				var t = a+b;
				document.write('Lam toan ' + a + pheptoan + b + '=' + t + "<br/>");
			}
			else if(pheptoan === '-'){
				var h = a-b;
				document.write('Lam toan ' + a + pheptoan + b + '=' + h + "<br/>");
			}
			else if(pheptoan === '*'){
				var tich = a*b;
				document.write('Lam toan ' + a + pheptoan + b + '=' + tich + "<br/>");
			}
			else if(pheptoan === '/'){
				var thuong = a/b;
				document.write('Lam toan ' + a + pheptoan + b + '=' + thuong + "<br/>");
			}
			else{
				document.write('Nhap sai phep toan' + "<br/>");
			}
		},
		this.ketban = function(tenban){
			this.tenbanmoi = tenban;
			document.write('Ten ban moi: ' + this.tenbanmoi + "<br/>");
		}
	};
	var Kid1 = new Kid('Tung',22,'nam','dabong')
	Kid1.lamtoan(2,7,'+');
	Kid1.ketban('Hieu');

	function parents(name, age, kid) {
		this.name = name;
		this.age = age;
		this.kid = kid;
	}

	var Father = new parents('bo', '50', 'Tung');
	var Mother = new parents('me', '48', 'Tung');

	function Family(name, soluong, danhsachthanhvien) {
		this.name = name;
		this.soLuong = soluong;
		this.danhSachThanhVien = danhsachthanhvien;
		this.themthanhvien = function(tenthanhvienmoi){
			this.thanhVienMoi = tenthanhvienmoi;
			document.write('Ten thanh vien moi: ' + this.thanhVienMoi + "<br/>");
			this.soLuong ++;
		};
	}
	var fm = new Family('family1',3,'bo,me,Tung');
	fm.themthanhvien('Cuong');
	document.write("So luong thanh vien moi: " + fm.soLuong + "<br/>");

	document.write("<br/>");

	document.write('BAI 3:' + "<br/>");
	var A = [5,7,8,2,11,16,77,88,66];
	document.write('Mang ban dau: ' + A + "<br/>");
	A.push(99);
	document.write('Mang a sau khi them 99: ' + A + "<br/>");
	document.write('Vi tri so 11: ' + A.indexOf(11) + "<br/>");
	var pos = A.indexOf(77);
	var removedItem = A.splice(pos,1);
	document.write('Mang A sau khi xoa 77: ' + A + "<br/>");
	A.sort(function(a, b){return a - b});
	document.write('Sap xep mang A theo thu tu tang dan: ' + A + "<br/>");
	A.sort(function(a, b){return b - a});
	document.write('Sap xep mang A theo thu tu giam dan: ' + A + "<br/>");
	var B = [];
	var C = [];
	for (var i = 0; i < A.length; i++) {
		if(A[i]%2 == 0){
			B.push(A[i]);
		}
		else {C.push(A[i])};
	}
	B.sort(function(a, b){return a - b});
	C.sort(function(a, b){return a - b});
	var D = B.concat(C);
	document.write('Sap xep mang A theo thu tu tat ca so chan truoc roi den so le: ' + D + "<br/>");
	document.write('Mang B chua tat ca so chan cua mang A: ' + B + "<br/>");
	document.write('Mang C chua tat ca so le cua mang A: ' + C + "<br/>");
},false)