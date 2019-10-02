const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email không được bỏ trống';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email không hợp lệ';
  }
  if (!values.password) {
    errors.password = 'Mật khẩu không được bỏ trống';
  } else if (values.password.trim().length < 6) {
    errors.password = 'Mật khẩu phải từ 6 ký tự trở lên';
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = 'Mật khẩu không được bỏ trống';
  } else if (values.confirmpassword.trim().length < 6) {
    errors.confirmpassword = 'Mật khẩu phải từ 6 ký tự trở lên';
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = 'Mật khẩu không trùng khớp';
  }
  if (!values.isAccept) {
    errors.isAccept = 'Bắt buộc';
  }
  return errors;
};

export default validate;
