import React from 'react';
import './PasswordReset.scss';
import PasswordUpdateForm from '../../components/passwordReset/UpdateForm';

export default function PasswordUpdate() {
  return (
    <div className="reset-form">
      <PasswordUpdateForm />
    </div>
  );
}
