package za.co.cdpc.persistence;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

public class BaseEntity {

	public String toString() {
        return ToStringBuilder.reflectionToString(this,
            ToStringStyle.MULTI_LINE_STYLE);
    }
}
